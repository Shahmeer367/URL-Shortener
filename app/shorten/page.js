"use client"
import React from 'react'
import { useState } from 'react'

const shorten = () => {
  const [url, seturl] = useState("")
  const [shorturl, setshorturl] = useState("")
  const [generated, setgenerated] = useState("")

  const generate = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "url": url,
      "shorturl": shorturl
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
        seturl("")
        console.log("Short URL cleared");
        setshorturl("")
        console.log(result)
        alert(result.message)
      })
      .catch((error) => console.error(error));
  }


  return (
    <>
      <div className='flex flex-col items-center gap-5 mx-auto max-w-lg my-16 bg-purple-200 p-8 rounded-lg'>
        <h1 className="font-bold text-2xl">Generate your short URLs</h1>
        <div className='flex w-full flex-col gap-3'>

          <input type="text"
            vqalue={url}
            className=' bg-white px-3 py-1.5 rounded-lg focus:outline-purple-600'
            placeholder='Enter your URL'
            onChange={e => { seturl(e.target.value) }} />

          <input type="text"
            value={shorturl}
            className=' bg-white px-3 py-1.5 rounded-lg focus:outline-purple-600'
            placeholder='Enter your preferred short URL text'
            onChange={e => { setshorturl(e.target.value) }} />
          <button
            onClick={generate}
            disabled={!url.trim() || !shorturl.trim()}
            className={`px-3 my-3 py-2 shadow-lg rounded-lg font-bold text-lg text-white
    ${!url.trim() || !shorturl.trim()
                ? 'bg-purple-400 cursor-not-allowed'
                : 'bg-purple-600 hover:bg-purple-500 cursor-pointer'}
  `}
          >
            Generate
          </button>
        </div>
        {generated && <div className='bg-purple-100 px-3 py-2 rounded-lg w-full text-center break-all'>
          <p>Your generated short URL is:</p>
          <a className='text-purple-700 font-bold' href={generated} target='_blank' rel='noreferrer'>{generated}</a>
        </div>}
      </div>
    </>
  )
}

export default shorten
