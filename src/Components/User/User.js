import React from 'react'
import { Route, Routes } from 'react-router'
import UserHeader from './UserHeader'
import Feed from '../Feed/Feed'
import { UserPhotoPost } from './UserPhotoPost'
import UserStats from './UserStats'
import { UserContext } from '../../userContext'
import NotFound404 from '../../NotFound404'
import Head from '../Helper/Head'

export const User = () => {
    const {data} = React.useContext(UserContext);

    return (
        <section className="container">
            <Head title="Minha Conta" />
            <UserHeader />
            <Routes>
                <Route path="/" element={<Feed user={data.id} />}/>
                <Route path="postar" element={<UserPhotoPost />}/>
                <Route path="estatisticas" element={<UserStats />}/>
                <Route path="*" element={<NotFound404 />} />
            </Routes>
        </section>
    )
}
