import React, { useState } from 'react';
import { Layout, Button, Tooltip, Icon } from 'antd';
import { SideCookie } from './sideCookie';
// import { getCookiesFrom } from '../../services/cookies';
import { InfoCard } from './infoCard';

const { Sider } = Layout;

interface ICookiesSideProps {
    contentHeight: number,
    cookies: [],
    loading: boolean,
    handleClick: Function
}

export const CookiesSideBar: React.FC<ICookiesSideProps> = ({ contentHeight, cookies, loading, handleClick }): JSX.Element => {
    const [selectedCookie, setSelectedCookie] = useState(null);
    const [showInfoCard, setInfoCard] = useState(true);

    const getCookiesFrom = (arrCookies) => {
        const allCookies = cookies.map((cookie, index) => <SideCookie key={index} id={index} cookie={cookie} handleOverOut={setInfoCard} setSelectCookie={setSelectedCookie} size={10} />)
        return <div style={{ display: 'flex', flexFlow: 'wrap' }}>
            {allCookies}
        </div>
    }

    const handleMenuClick = (e) => { handleClick('COOKIES_HORIZONTAL_VIZ', true) }

    return (
        <Sider width={45} style={{ marginTop: 40, height: contentHeight }} className="site-layout-background" id="CookieBar">
            <Tooltip placement="rightTop" title="View all cookies">
                <Button type="primary" shape="circle" onClick={handleMenuClick}>
                    <Icon type="smile" theme="twoTone" title="Sound Viz" />
                </Button>
            </Tooltip>
            {showInfoCard && selectedCookie !== null ? <InfoCard cookie={selectedCookie} position={"left"} /> : <></>}
            {loading ? <></> : getCookiesFrom(cookies)}
        </Sider >
    )
}