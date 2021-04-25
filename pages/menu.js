import React from 'react'

export default function Menu() {
    return (
        <div>
            <nav className="menu">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/destaque">Filmes em Destaque</a></li>
                    <li><a href="/busca">Busca</a></li>
                    <li><a href="/links">Links</a></li>
                    <li><a href="/sobre">Sobre</a></li>
                </ul>
            </nav>
        </div>
    )
}
