import { requireAdmin } from "@/lib/auth"

export default async function Layout({children}:{children:React.ReactNode}){


    await requireAdmin()



    return<html>
        <body>

    <div>Dashboard layoutttt</div>
        {children}
        </body>
    </html>

}