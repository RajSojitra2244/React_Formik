import React from 'react'

import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,

} from '@ant-design/icons';

export const SidebarData = () => [
    {
        title: 'Home',
        path: '/',
        icon: <PieChartOutlined/>,
    },
    {
        title: 'About',
        path: '/about',
        icon: <DesktopOutlined/>,
    },
]