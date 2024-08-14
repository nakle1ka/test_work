'use client'

import React, { useState } from 'react';
import axios from 'axios';

import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useIsAuth } from '@/store';

import { Title } from '@/components/ui/title/title';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

import styles from './login.module.scss'

type FormType = {
    login: string;
    password: string;
}

const Login: React.FC = () => {

    // если есть возможность, сможете позднее объяснить, зачем использовать хранилище
    // для управлением состояния регистрации? Не лучше будет просто проверять куки?
    
    const router = useRouter()
    // Проверка на регистраию, в положительном случае перенаправляем на /posts
    // в серверных компонентах подобным занимается middleware
    const isAuth = useIsAuth(state => state.isAuth)
    console.log(isAuth)
    if (isAuth) router.replace("/posts?page=1")
    const setIsAuth = useIsAuth(state => state.setIsAuth)

    const { register, handleSubmit, formState } = useForm<FormType>({
        mode: "onChange"
    })

    const [serverError, setServerError] = useState("")


    const onFormSubmit: SubmitHandler<FormType> = async (data) => {
        const res = await axios.post("/api/login", data, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        if (res.data.success) {
            setIsAuth(true)
            // router.push("/posts?page=1")
            // с роутером возникал баг, что не перекидывал на страницу с постами
            window.location.replace("/posts?page=1")
        } else {
            setServerError(res.data.error)
        }
    }

    return (
            <div className={styles.container} >
                <form onSubmit={handleSubmit(onFormSubmit)} className={styles.form}>
                    <Title text="login" />

                    <Input
                        type='text'
                        placeholder='login'
                        {...register("login", {
                            required: "login field is required"
                        })}
                    />

                    <Input
                        type='password'
                        placeholder='password'
                        {...register("password", {
                            required: "password field is required"
                        })}
                    />

                    <Button type='submit'>Login</Button>

                    <div className={styles.errors}>
                        <p>{serverError || formState.errors["login"]?.message || formState.errors["password"]?.message}</p>
                    </div>
                </form>
            </div>
    );
}

export default Login