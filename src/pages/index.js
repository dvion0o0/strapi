import React, { useState, useEffect } from "react"
import axios from "axios"
export default function Home() {
  const [file, setFile] = useState("")
  const [url, setUrl] = useState(null)
  const handleChange = async e => {
    setFile(e.target.files[0])
  }
  const fetch = async () => {
    const data = await axios.get(
      "https://secure-escarpment-95804.herokuapp.com/products"
    )
    console.log(data)
  }

  useEffect(() => {
    fetch()
  }, [])

  const handleClick = async () => {
    const form = new FormData()
    form.append("files", file)
    const result = await axios.post(
      "https://secure-escarpment-95804.herokuapp.com/upload",
      form
    )
    console.log(result.data[0].url)
    setUrl(result.data[0].url)

    const post = await axios.post(
      "https://secure-escarpment-95804.herokuapp.comgg/products",
      {
        Name: "Testing",
        Description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, labore.",
        images: result.data[0].id,
      }
    )
    console.log(post)
  }

  return (
    <>
      {" "}
      <div>Hello world!2</div>
      <input type="file" onChange={e => handleChange(e)} />
      <button onClick={handleClick}>submit</button>
    </>
  )
}
