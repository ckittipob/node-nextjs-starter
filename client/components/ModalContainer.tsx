import { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { FaTimes } from 'react-icons/fa'
import styles from '@/styles/Modal.module.css'
import Popup from 'reactjs-popup'

export default function Modal({ show, onClose, children, title }:any) {
  const [isBrowser, setIsBrowser] = useState(false)

  useEffect(() => {setIsBrowser(true)},[])

  const handleClose = (e: any) => {
    onClose()
  }

  const modalContent = (
    <Popup open={show} onClose={(e) => handleClose(e)}>
        {children}
    </Popup>
  )

  if (isBrowser) {
    return modalContent
  } else {
    return null
  }
}