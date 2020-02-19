import React from 'react'
import './Nav.css'
import NavItem from './NavItem'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <NavItem title="Início" path="/" icon="home"/>
            <NavItem title="Usuários" path="/users" icon="users"/>
        </nav>
    </aside>