import React from "react"

interface ChatPreviewProps extends React.PropsWithChildren { }

const ChatPreview: React.FunctionComponent<ChatPreviewProps> = (props) => {
  return (
    <div className="h-[calc(100vh-105px)] flex bg-MainPurple-2 flex-col justify-center items-center">
      <img src="https://cutewallpaper.org/21/loading-gif-transparent-background/Download-Loading-Gif-Generator-Transparent-Background-PNG-.gif" alt="" />
      <h1 className="text-lg text-center mt-1">
        Oh no, Choose a chat Please!!
      </h1>
    </div>
  )
}

export default ChatPreview