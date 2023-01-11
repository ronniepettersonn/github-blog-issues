import Github from '../../assets/github.svg'
import Building from '../../assets/building.svg'
import Users from '../../assets/users.svg'
import ArrowUp from '../../assets/arrow-up-right.svg'
import { Card, CardsContainer, ContentContainer, ContentForm, ContentHeader, ContentMain } from "./styles";
import { useContext, useEffect, useState } from 'react';
import { api } from '../../server/api';
import { useForm } from 'react-hook-form';
import { formatDistanceToNow } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'
import { Link } from 'react-router-dom';
import { IssueContext } from '../../Context/IssueContext';

interface DataGithub {
    avatar_url: string
    bio: string
    followers: number
    name: string
    login: string
    html_url: string
    company: string
    number: number
}


export function Content() {
    const [dataGithub, setDataGithub] = useState({} as DataGithub)

    const { issues, setIssues } = useContext(IssueContext)

    const { register, handleSubmit } = useForm()

    function handleSubmitIssues(data: any) {
        getIssues(data.issues)
    }

    async function getGithub() {
        const response = await api.get('/users/ronniepettersonn')
        const data = response.data

        setDataGithub(data)
    }

    async function getIssues(searchInput = '') {
        const response = await api.get(`search/issues?q=${searchInput}repo:ronniepettersonn/github-blog-issues`)
        const data = response.data

        setIssues(data.items)
        console.log(issues)
    }

    useEffect(() => {
        getGithub()

        getIssues('')
    }, [])

    return (
        <ContentContainer>
            <ContentHeader>
                <img src={dataGithub.avatar_url} alt="" />

                <ContentMain>
                    <header>
                        <h1>{dataGithub.name}</h1>

                        <a href={dataGithub.html_url} target='_blank'>
                            github
                            <img src={ArrowUp} alt="" />
                        </a>
                    </header>

                    <main>
                        <p>{dataGithub.bio}</p>

                        <div className="icons">
                            <span>
                                <img src={Github} alt="" />
                                {dataGithub.login}
                            </span>

                            <span>
                                <img src={Building} alt="" />
                                {dataGithub.company}
                            </span>

                            <span>
                                <img src={Users} alt="" />
                                {dataGithub.followers} seguidores
                            </span>
                        </div>
                    </main>
                </ContentMain>
            </ContentHeader>

            <ContentForm onSubmit={handleSubmit(handleSubmitIssues)}>
                <header>
                    <h2>Publicações</h2>

                    <span>{issues?.length} publicações</span>
                </header>
                <input type="text" placeholder='Buscar conteúdo' {...register('issues')} />
            </ContentForm>

            <CardsContainer>
                {
                    issues.map(issue => {
                        return (
                            <Link to={`/post/${issue.number}`} key={issue.id}>
                                <Card >
                                    <header>
                                        <h1>{issue.title}</h1>

                                        <span>{String(formatDistanceToNow(new Date(issue.created_at), { locale: ptBr }))}</span>
                                    </header>

                                    <p>{issue.body}</p>
                                </Card>
                            </Link>
                        )
                    })
                }

            </CardsContainer>
        </ContentContainer>
    )
}