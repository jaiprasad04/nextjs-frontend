import { useState } from 'react';

import Modal from 'react-modal';

import { IoClose } from "react-icons/io5";
import { CiMail } from "react-icons/ci";

const LoginPage = (props) => {
    const [focused, setFocused] = useState(false);
    const [inputField1, setInputField1] = useState('')
    const [inputField2, setInputField2] = useState('')

    const {modalIsOpen, createModalIsOpen, closeModal, closeCreateModal} = props

    const onChangeInput1 = (event) => {
        setInputField1(event.target.value)
    }

    const onChangeInput2 = (event) => {
        setInputField2(event.target.value)
    }

    const submitForm1 = async (event) => {
        event.preventDefault()
    }

    const submitForm2 = async (event) => {
        event.preventDefault()
    }

    return (
        <>
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                // contentLabel="Example Modal"
                style={{
                overlay: {
                    backgroundColor: '#ffffff80'
                },
                content: {
                    backgroundColor: '#e4e4e7',
                    width: '100%',
                    maxWidth: '425px',
                    height: '435px',
                    position: 'fixed',
                    left: '0',
                    right: '0',
                    top: '0',
                    bottom: '0',
                    margin: 'auto',
                    borderRadius: '18px',
                    padding: '12px',
                    border: 'none',
                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }
                }}
            >
                <button type='button' onClick={closeModal} className="self-end"><IoClose color='gray' size={18} /></button>
                <h1 className="text-gray-900 text-lg font-bold font-poppins mt-0 pt-0">character.ai</h1>
                <p className="text-2xl my-6">Sign in</p>
                <button className="flex items-center justify-start bg-gray-300 w-72 py-3 px-4 rounded-3xl mb-2 hover:text-gray-600 active:bg-gray-400">
                    <img src='google.png' className='w-4 mr-10' alt='' />
                    <p className="text-sm text-center">Continue with Google</p>
                </button>
                <button className="flex items-center justify-start bg-gray-300 w-72 py-3 px-4 rounded-3xl mt-1 hover:text-gray-600 active:bg-gray-400">
                    <img src='apple.png' className='w-4 mr-10' alt='' />
                    <p className="text-sm text-center">Continue with Apple</p>
                </button>
                <div className="text-center flex items-center mt-2 mb-2">
                    <span className="inline-block border-b border-gray-400 w-32"></span>
                    <span className="mx-4 text-xs text-gray-900 font-base">OR</span>
                    <span className="inline-block border-b border-gray-400 w-32"></span>
                </div>
                <form onSubmit={submitForm1}>
                    <div className="flex items-center w-72 border border-gray-300 rounded-3xl px-4 py-1">
                        <CiMail size={24} className='text-gray-500' />
                        <div className="relative w-72 flex items-center">
                            <input
                                type="email"
                                className="w-full px-3 py-2 border rounded-md focus:outline-none bg-transparent"
                                onFocus={() => setFocused(true)}
                                onBlur={(e) => setFocused(e.target.value !== '')}
                                onChange={onChangeInput1}
                                value={inputField1}
                            />
                            <label
                            className={`absolute left-3 transition-all duration-300 ${
                                focused ? 'top-0 text-gray-500 text-xs' : 'top-2 text-gray-500 text-base'
                            }`}
                            >
                            Email
                            </label>
                        </div>
                    </div>
                    {inputField1.length !== 0 &&<button className="bg-black text-white w-72 py-2 px-4 rounded-3xl mt-2 hover:bg-gray-800 active:bg-gray-400">
                        Continue
                    </button>}
                </form>
                <button className="mt-6 text-gray-600 hover:text-gray-900">Trouble signing in?</button>
            </Modal>
        </div>
        <div>
            <Modal
                isOpen={createModalIsOpen}
                onRequestClose={closeCreateModal}
                // contentLabel="Example Modal"
                style={{
                overlay: {
                    backgroundColor: '#ffffff80'
                },
                content: {
                    backgroundColor: '#e4e4e7',
                    width: '100%',
                    maxWidth: '425px',
                    maxHeight: '510px',
                    position: 'fixed',
                    left: '0',
                    right: '0',
                    top: '0',
                    bottom: '0',
                    margin: 'auto',
                    borderRadius: '18px',
                    padding: '12px',
                    border: 'none',
                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }
                }}
            >
                <button type='button' onClick={closeCreateModal} className="self-end"><IoClose color='gray' size={18} /></button>
                <h1 className="text-gray-900 text-lg font-bold font-poppins mt-0 pt-0">character.ai</h1>
                <p className="text-2xl my-6">Create an account</p>
                <button className="flex items-center justify-start bg-gray-300 w-72 py-3 px-4 rounded-3xl mb-2 hover:text-gray-600 active:bg-gray-400">
                    <img src='google.png' className='w-4 mr-10' alt='' />
                    <p className="text-sm text-center">Continue with Google</p>
                </button>
                <button className="flex items-center justify-start bg-gray-300 w-72 py-3 px-4 rounded-3xl mt-1 hover:text-gray-600 active:bg-gray-400">
                    <img src='apple.png' className='w-4 mr-10' alt='' />
                    <p className="text-sm text-center">Continue with Apple</p>
                </button>
                <div className="text-center flex items-center mt-2 mb-2">
                    <span className="inline-block border-b border-gray-400 w-32"></span>
                    <span className="mx-4 text-xs text-gray-900 font-base">OR</span>
                    <span className="inline-block border-b border-gray-400 w-32"></span>
                </div>
                <form onSubmit={submitForm2}>
                    <div className="flex items-center w-72 border border-gray-300 rounded-3xl px-4 py-1">
                        <CiMail size={24} className='text-gray-500' />
                        <div className="relative w-72 flex items-center">
                            <input
                                type="email"
                                className="w-full px-3 py-2 border rounded-md focus:outline-none bg-transparent"
                                onFocus={() => setFocused(true)}
                                onBlur={(e) => setFocused(e.target.value !== '')}
                                onChange={onChangeInput2}
                                value={inputField2}
                            />
                            <label
                                className={`absolute left-3 transition-all duration-300 ${
                                    focused ? 'top-0 text-gray-500 text-xs' : 'top-2 text-gray-500 text-base'
                            }`}
                            >
                                Email
                            </label>
                        </div>
                    </div>
                    {inputField2.length !== 0 && <button className="bg-black text-white w-72 py-2 px-4 rounded-3xl mt-2 hover:bg-gray-800 active:bg-gray-400">
                        Continue
                    </button>}
                </form>
                <button className="mt-6 text-gray-600 hover:text-gray-900">Trouble signing in?</button>
                <p className="text-xs text-center w-80 mt-6 mb-4">By continuing, you agree to the Terms of Service and Privacy Policy</p>
            </Modal>
        </div>
        </>
    )
}

export default LoginPage