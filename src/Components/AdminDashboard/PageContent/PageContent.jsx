import React from 'react'

import MainContent from './MainContent/MainContent'
import SideContent from './SideContent/SideContent'

import './PageContent.css'

function PageContent() {
    return (
        <div className="page-content-body">
            <SideContent heading="Event Settings"/>
            <MainContent heading="Virtual/Hybrid Center" />
        </div>
    )
}

export default PageContent
