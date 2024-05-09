"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Card} from "react-bootstrap";
import dash from "@/assets/dash.svg";
import history from "@/assets/history.png";
import setting from "@/assets/setting.png";
import log from "@/assets/log.png";
import Dashboard from "./dashboard/page";
import Settings from "./settings/page";
import History from "./history/page";
import "./navigation.css"

const Navigation = () => {
    return (
        <>
           
                        <Card  className="d-none d-md-block">
                            <div className=" p-3 mt-3 mb-2">
                                <div><h5 style={{ fontSize: "20px", fontWeight: "500", color: '#1A1A1A' }}>Navigation</h5></div>
                                   <Link style={{color:'white'}} href="/navigation/dashboard">
                                   <div className='d-flex mt-4'>
                                    <div >
                                        <Image src={dash} width={0} height={0} sizes='100vw' alt='product' />
                                    </div>
                                    <div className="ms-3 mt-1">
                                        <h1 style={{ color: '#666666', fontWeight: '400', fontSize: '16px' }}>Dashboard</h1>
                                    </div>
                                </div>
                                   </Link>
                              
                                   <Link style={{color:'white'}} href="/navigation/history">
                                <div className='d-flex mt-4'>
                                    <div >
                                        <Image src={history} width={0} height={0} sizes='100vw' alt='product' />
                                    </div>
                                    <div className="ms-3 mt-1">
                                        <h1 style={{ color: '#666666', fontWeight: '400', fontSize: '16px' }}>History</h1>
                                    </div>
                                </div>
                                </Link>
                                <Link style={{color:'white'}} href="/navigation/settings">

                                <div className='d-flex mt-4'>
                                    <div >
                                        <Image src={setting} width={0} height={0} sizes='100vw' alt='product' />
                                    </div>
                                    <div className="ms-3 mt-1">
                                        <h1 style={{ color: '#666666', fontWeight: '400', fontSize: '16px' }}>Settings</h1>
                                    </div>
                                </div>
                                </Link>
                                <Link style={{color:'white'}} href="">
                                <div className='d-flex mt-4'>
                                    <div >
                                        <Image src={log} width={0} height={0} sizes='100vw' alt='product' />
                                    </div>
                                    <div className="ms-3 mt-1">
                                        <h1 style={{ color: '#666666', fontWeight: '400', fontSize: '16px' }}>Log-out</h1>
                                    </div>
                                </div>
                                </Link>

                            </div>


                        </Card>
                   

        </>
    )
}

export default Navigation





