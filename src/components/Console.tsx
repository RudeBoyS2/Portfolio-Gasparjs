import React from 'react';
import Terminal from 'terminal-in-react';

const Console = () => {
  const showMsg = "bokita el mas gigante"
  console.log("enter")

  return (
    <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh"
        }}
      >
        <Terminal
          color='green'
          backgroundColor='black'
          barColor='black'
          style={{ fontWeight: "bold", fontSize: "1em" }}
          commands={{
            'enter': (args: any, print: any, runCommand: any) => {
              const text = "asdasd"
              print('');
              for (let i = 0; i < text.length; i += 1) {
                setTimeout(() => {
                  runCommand(`edit-line ${text.slice(0, i + 1)}`);
                }, 100 * i);
              }
            }
          }}
          // descriptions={{
          //   // 'open-google': 'opens google.com',
          //   showmsg: 'shows a message',
          //   alert: 'alert', popup: 'alert'
          // }}
          msg='You can write anything here. Example - Hello! My name is Foo and I like Bar.'
        />
      </div>
  )
}

export default Console
