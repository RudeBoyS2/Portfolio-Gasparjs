import { Box, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import Terminal from "terminal-in-react";

const Console = () => {
  // setTimeout(() => {
  //   console.log("> npm install gasparjs-portfolio")
  // }, 1500)
  // setTimeout(() => {
  //   console.log("Installing Dependencies...")
  // }, 2000)
  // setTimeout(() => {
  //   console.log("0% completed...")
  // }, 3000)
  // setTimeout(() => {
  //   console.log("50% completed...")
  // }, 4000)
  // setTimeout(() => {
  //   console.log("100% completed.")
  // }, 5000)
  // setTimeout(() => {
  //   console.log("Run 'npm-run'")
  // }, 6000)
  // setTimeout(() => {
  //   console.log("> npm-run")
  // }, 7000)
  // setTimeout(() => {
  //   console.log("ready - started server on 0.0.0.0:****, url: http://gasparjs.vercel.app")
  // }, 8000)

  
    return (
      <>
      
      <Flex
        display={{ base: "none", sm: "flex" }}
        h="100vh"
        w="100vw"
        position="relative"
        align="center"
        justify="center"
        key="console"
        as={motion.div}
        initial={{ y: "100%" }}
        animate={{ y: "0%", transition: { duration: 0.7, ease: "easeInOut" } }}
        exit={{ y: "100%", transition: { duration: 2, ease: "easeOut" } }}
      >
        <video
          autoPlay
          muted
          playsInline
          style={{
            objectFit: "cover",
            height: "430px",
          }}
        >
          <source src="/assets/video1.mp4" type="video/mp4" />
        </video>
      </Flex>
      <Flex
        display={{ base: "flex", sm: "none" }}
        h="100vh"
        w="100vw"
        position="relative"
        align="center"
        justify="center"
        key="console"
        as={motion.div}
        initial={{ y: "100%" }}
        animate={{ y: "0%", transition: { duration: 0.7, ease: "easeInOut" } }}
        exit={{ y: "100%", transition: { duration: 2, ease: "easeOut" } }}
      >
        <video
          autoPlay
          muted
          playsInline
          style={{
            objectFit: "cover",
            height: "430px",
            // width: "500px"
          }}
        >
          <source src="/assets/video2.mp4" type="video/mp4" />
        </video>
      </Flex>
      </>
    )
      
  //  return (
  //    <div
  //       style={{
  //         display: "flex",
  //         justifyContent: "center",
  //         alignItems: "center",
  //         height: "100vh",
  //       }}
  //     >
  //       <Terminal
  //         watchConsoleLogging
  //         color='white'
  //         backgroundColor='#242424'
  //         barColor='#242424'
  //         prompt='white'
  //         style={{ fontWeight: "bold", fontSize: "1em", height: "520px", width: "370px", marginTop: "20px", marginLeft: "auto", marginRight: "auto"}}
  //         commands={{
  //           'npm': (args: any, print: any, runCommand: any) => {
  //             const text1 = "Installing Dependencies..."
  //             const text2 = "0% completed..."
  //             const text3 = "50% completed..."
  //             const text4 = "100% completed."
  //             const text5 = "Run 'npm-run'"
  //             runCommand(`edit-line ${text1}`)
  //             setTimeout(() => {
  //               runCommand(`edit-line ${text2}`)
  //             }, 1000)
  //             setTimeout(() => {
  //               runCommand(`edit-line ${text3}`)
  //             }, 2000)
  //             setTimeout(() => {
  //               runCommand(`edit-line ${text4}`)
  //             }, 3000)
  //             setTimeout(() => {
  //               runCommand(`edit-line ${text5}`)
  //             }, 4000)
  //           },
  //           'npm-run': () => {

  //               return "ready - started server on 0.0.0.0:****, url: http://gasparjs.vercel.app"

  //           }
  //         }}
  //         msg='Next 12.2.5'
  //       />
  //     </div>
  // )
}

export default Console;
