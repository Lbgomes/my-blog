import { ArticlesList } from "@/components/ArticlesList";
import { Header } from "@/components/Header"
import { PageContainer } from "@/components/PageContainer"
import CreateArticle from "@/components/createArticle";



const Admin = () => {

    return (
        <PageContainer>
        <Header />
        <CreateArticle />
        <ArticlesList isAdmin />

      </PageContainer>
    )
}

export default Admin