import { motion, animate, useMotionValue, useTransform } from 'framer-motion';
import React, { useEffect } from 'react';

export default function SuccessfulInfo() {
    const countSuccessfulCustomer = useMotionValue(30);
    const roundedSuccessfulCustomer = useTransform(countSuccessfulCustomer, Math.round);
  
    useEffect(() => {
      const animation = animate(countSuccessfulCustomer, 82, { duration: 4 });
  
      return animation.stop;
    }, []);
  
    return (
        <>
            <div>
                <motion.h1 style={{
                    color:"#f0eada"}}>{roundedSuccessfulCustomer}</motion.h1>
                <h1 style={{color:"#f0eada"}}>%</h1>
            </div>
            <div>
                <motion.h1 style={{
                    color:"#f0eada"}}>{roundedSuccessfulCustomer}</motion.h1>
                <h1 style={{color:"#f0eada"}}>%</h1>
            </div>
            <div>
                <motion.h1 style={{
                    color:"#f0eada"}}>{roundedSuccessfulCustomer}</motion.h1>
                <h1 style={{color:"#f0eada"}}>%</h1>
            </div>
            
        </>
    );
}