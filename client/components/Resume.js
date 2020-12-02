import React, {useEffect, useState} from 'react'
import ReactMarkdown from 'react-markdown'

function Resume() {
  const [resume, setResume] = useState('')
  useEffect(() => {
    fetch(
      'https://gist.githubusercontent.com/truthgoddess/e90ad2e7d4f6183c722223a83aaf1753/raw/ce08334941dfcaf209cade9e32c14761ec8ee560/KateNortonResume.md'
    )
      .then((res) => res.text())
      .then((text) => setResume(text))
  }, [])
  return (
    <div className="markdown-container">
      <ReactMarkdown source={resume}></ReactMarkdown>
    </div>
  )
}

export default Resume
