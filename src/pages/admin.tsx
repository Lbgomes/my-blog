import { ArticlesList } from "@/components/ArticlesList";
import { Header } from "@/components/Header"
import { PageContainer } from "@/components/PageContainer"



const Admin = () => {

    return (
        <PageContainer>
        <Header />
        <ArticlesList isAdmin />

      </PageContainer>
    )
}

export default Admin