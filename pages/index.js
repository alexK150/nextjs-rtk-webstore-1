import {Header} from "@/components/header";
import Footer from "@/components/footer";
import "./index.scss"
import axios from "axios";
import { useSession, signIn, signOut } from "next-auth/react"

export default function Home({country}) {
    const { data: session } = useSession()
    console.log(session)

    return (
        <div>
            <Header country={country}/>
            <Footer country={country}/>
        </div>
    );
}
export async function getServerSideProps() {
    //@todo перед деплоем вернуть запрос, это сделано чтоб не тратить кредиты https://dashboard.ipregistry.co/overview
    const API_URL = `https://api.ipregistry.co/?key=${process.env.IPREGISTRY_API_KEY}`;
    let data = await axios
        // .get(`${API_URL}`)
        .get('http://localhost')
        .then((res) => {
            return res.data.location.country
        })
        .catch((err) => {
            console.error("Ошибка при получении данных из ipregistry:", err);

            return {
                props: {
                    country: {
                        name: 'Unknown',
                        flag: ''
                    }
                }
            };
        });
    return {
        props: {
            // country: { name: data.name, flag: data.flag.emojitwo},
            country: { name: 'Germany', flag: 'https://cdn.ipregistry.co/flags/emojitwo/de.svg'}
        },
    };
}

