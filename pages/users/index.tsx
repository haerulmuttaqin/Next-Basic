import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import styles from '../../styles/Users.module.css'

interface UsersProps {
    dataUsers: Array<any>
}

export default function Users(props: UsersProps) {
    const { dataUsers } = props
    const router = useRouter()

    return (
        <Layout pageTitle="Users">
            {dataUsers.map((user) => {
                return (
                    <div key={user.id} onClick={() => router.push(`/users/${user.id}`)} className={styles.card} >
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                    </div>
                )
            })}
        </Layout>
    );
}

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const dataUsers = await response.json();
    return {
        props: {
            dataUsers,
        }
    }
}