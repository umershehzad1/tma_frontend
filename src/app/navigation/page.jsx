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

const Navigation = () => {
    return (
        <>
           
                        <Card >
                            <div className=" p-3 mt-3 mb-2">
                                <div><h5 style={{ fontSize: "20px", fontWeight: "500", color: '#1A1A1A' }}>Navigation</h5></div>
                                   <Link style={{color:'white'}} href="navigation/dashboard">
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



// "use client"
// import Image from "next/image";
// import React, { useState } from "react";
// import Link from "next/link";
// import { Card, Container, Col, Row } from "react-bootstrap";
// import { useRouter } from "next/router";
// import Dashboard from "./dashboard/page";
// import Settings from "./settings/page";
// import History from "./history/page";

// const Page = () => {
//     const router = useRouter();
//     const [activeRoute, setActiveRoute] = useState(router.pathname);

//     // Function to update active route
//     const handleSetActiveRoute = (route) => {
//         setActiveRoute(route);
//     };

//     return (
//         <>
//             <Container>
//                 <Row>
//                     <Col xs={12} lg={3}>
//                         <Card>
//                             <div className="p-3 mt-3">
//                                 <div>
//                                     <h5 style={{ fontSize: "20px", fontWeight: "500", color: '#1A1A1A' }}>Navigation</h5>
//                                 </div>
//                                 <Link href="/navigation/dashboard">
//                                     <div className={`d-flex mt-4 ${activeRoute === '/navigation/dashboard' ? 'active' : ''}`} onClick={() => handleSetActiveRoute('/navigation/dashboard')}>
//                                         <div>
//                                             <Image src="/dash.svg" width={24} height={24} alt="Dashboard" />
//                                         </div>
//                                         <div className="ms-3 mt-1">
//                                             <h1 style={{ color: '#666666', fontWeight: '400', fontSize: '16px' }}>Dashboard</h1>
//                                         </div>
//                                     </div>
//                                 </Link>
//                                 <Link href="/navigation/history">
//                                     <div className={`d-flex mt-4 ${activeRoute === '/navigation/history' ? 'active' : ''}`} onClick={() => handleSetActiveRoute('/navigation/history')}>
//                                         <div>
//                                             <Image src="/history.png" width={24} height={24} alt="History" />
//                                         </div>
//                                         <div className="ms-3 mt-1">
//                                             <h1 style={{ color: '#666666', fontWeight: '400', fontSize: '16px' }}>History</h1>
//                                         </div>
//                                     </div>
//                                 </Link>
//                                 <Link href="/navigation/settings">
//                                     <div className={`d-flex mt-4 ${activeRoute === '/navigation/settings' ? 'active' : ''}`} onClick={() => handleSetActiveRoute('/navigation/settings')}>
//                                         <div>
//                                             <Image src="/setting.png" width={24} height={24} alt="Settings" />
//                                         </div>
//                                         <div className="ms-3 mt-1">
//                                             <h1 style={{ color: '#666666', fontWeight: '400', fontSize: '16px' }}>Settings</h1>
//                                         </div>
//                                     </div>
//                                 </Link>
//                                 <Link href="/navigation/logout">
//                                     <div className={`d-flex mt-4 ${activeRoute === '/navigation/logout' ? 'active' : ''}`} onClick={() => handleSetActiveRoute('/navigation/logout')}>
//                                         <div>
//                                             <Image src="/log.png" width={24} height={24} alt="Log-out" />
//                                         </div>
//                                         <div className="ms-3 mt-1">
//                                             <h1 style={{ color: '#666666', fontWeight: '400', fontSize: '16px' }}>Log-out</h1>
//                                         </div>
//                                     </div>
//                                 </Link>
//                             </div>
//                         </Card>
//                     </Col>
//                     <Col xs={12} lg={9}>
//                         {router.pathname === '/navigation/dashboard' && <Dashboard />}
//                         {router.pathname === '/navigation/history' && <History />}
//                         {router.pathname === '/navigation/settings' && <Settings />}
//                     </Col>
//                 </Row>
//             </Container>
//         </>
//     );
// };

// export default Page;



