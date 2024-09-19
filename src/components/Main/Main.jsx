import { React, useEffect, useState } from "react";
import "./Main.css";

function isPrime(num) {
    // isNaN checks if the number is not a number (e.g. NaN, Infinity) and returns true if it is
    // isFinite checks if the number is a finite number (not Infinity or -Infinity) and returns true if it is
    // we use these two methods to check if the number is a valid number to check if it's prime
    if (num < 2 || isNaN(num) || !isFinite(num)) return false;
    if (num % 2 === 0) return num === 2;
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
      if (num % i === 0) return false;
    }
    return true;
  }

  function getRandomColor() {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return "#" + n.slice(0, 6);
  }

  function generatePassword() {
    const letters = "abcdefghijklmnopqrstuvwxyz";
    const symbols = ".#@$%";
    const numbers = "0123456789";
    let password = "";
    for (let i = 0; i < 6; i++) {
      const charType = Math.floor(Math.random() * 3);
      switch (charType) {
        case 0:
            password += letters[Math.floor(Math.random() * letters.length)];
          break;
        case 1:
          password += symbols[Math.floor(Math.random() * symbols.length)];
          break;
        case 2:
          password += numbers[Math.floor(Math.random() * numbers.length)];
          break;
        default:
          break;
      }
    }
    return password;
  }

export const Main = () => {
    // useState is a hook that allows us to add state variables to functional components.
    // It takes an initial value as an argument and returns an array with two elements.
    // The first element is the current value of the state variable, and the second element is a function that can be used to update the state variable.
    // In this case, we are using useState to create a state variable called nums and set its initial value to an array of 28 random numbers between 0 and 100.
    const [nums, setNums] = useState(
        Array.from({ length: 28 }, () => Math.floor(Math.random() * 100))
    );

    useEffect(() => {
        const interval = setInterval(() => {
            setNums(
                nums.map(num => Math.floor(Math.random() * 100))
            );
        }, 500);
        return () => clearInterval(interval);
    }, []);

    const boxes = nums.map(num => {
        let outcome = '';
        if (num % 2 === 0) {
            outcome = <div className="box" style={{ backgroundColor: 'green' }}>{num}</div>
        } else if (num % 2 === 1) {
            outcome = <div className="box" style={{ backgroundColor: 'yellow' }}>{num}</div>
        } if (isPrime(num)) {
            outcome = <div className="box" style={{ backgroundColor: 'red' }}>{num}</div>
        } 
        return outcome;
    });

    const randomColorBoxes = Array.from({ length: 28 }, () => {
        const randomColor = getRandomColor();
        return <div className="box" style={{ backgroundColor: randomColor }}>{randomColor}</div>
    });

    const passwordBoxes = Array.from({ length: 28 }, () => {
        const password = generatePassword();
        return <div className="box" style={{ backgroundColor: '#9a9a9a' }}>{password}</div>
    });

    return (
        <main>
            <div className="placement">
            {boxes}
            </div>
            <div className="placement">
            {randomColorBoxes}
            </div>
            <div className="placement">
            {passwordBoxes}
            </div>
        </main>
    );
}


