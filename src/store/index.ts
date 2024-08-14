import { isHasCookie } from "@/utils/isHasCookie";
import { create } from "zustand"

type isAuthType = {
    isAuth: boolean;
    setIsAuth: (value: boolean) => void;
}

export const useIsAuth = create<isAuthType>((set) => ({
    // так как нам нужен SSR и серверные компоненты, а zustand - это клиентская часть,
    // то будем хранить информацю в куки
    isAuth: isHasCookie("fakeToken"),
    setIsAuth: (value) => set((state) => ({
        isAuth: value
    }))
}))