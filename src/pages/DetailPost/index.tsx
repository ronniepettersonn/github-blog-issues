import { useContext, useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { Header } from "../../Components/Header/Header"

import { CardPostContainer, ContentPost, DetailPostContainer } from "./styles"

import Github from '../../assets/github.svg'
import ArrowUp from '../../assets/arrow-up-right.svg'
import Calendar from '../../assets/calendar.svg'
import Comments from '../../assets/comments.svg'
import ChevronLeft from '../../assets/chevron-left.svg'
import { formatDistanceToNow } from "date-fns"
import ptBR from "date-fns/locale/pt-BR"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"
import { api } from "../../server/api"

interface Issue {
    id: number
    title: string
    body: string
    html_url: string
    created_at: Date
    user: { login: string }
    comments: number
}

export function DetailPost() {
    const { id } = useParams()

    const [issue, setIssue] = useState({} as Issue)

    async function getNewIssue() {
        const response = await api.get(`https://api.github.com/repos/ronniepettersonn/github-blog-issues/issues/${id}`)
        const data = response.data

        return setIssue(data)
    }
    console.log(issue)

    const issueFiltered = issue

    useEffect(() => {
        getNewIssue()

    }, [])

    if (issueFiltered.id) {
        return (
            <DetailPostContainer>
                <Header />
                <CardPostContainer>
                    <header>
                        <Link to={'/'}>
                            <img src={ChevronLeft} alt='' />
                            VOLTAR
                        </Link>

                        <a href={issueFiltered.html_url} target='_blank'>
                            ver no github
                            <img src={ArrowUp} alt="" />
                        </a>
                    </header>

                    <main>
                        <h1>{issueFiltered.title}</h1>

                        <div className="icons">
                            <span>
                                <img src={Github} alt="" />
                                {String(issueFiltered.user.login)}
                            </span>

                            <span>
                                <img src={Calendar} alt="" />
                                {formatDistanceToNow(new Date(String(issueFiltered.created_at)), { locale: ptBR })}
                            </span>

                            <span>
                                <img src={Comments} alt="" />
                                {issueFiltered.comments} comentários
                            </span>
                        </div>
                    </main>
                </CardPostContainer>

                <ContentPost>
                    <ReactMarkdown>
                        {String(issueFiltered.body)}
                    </ReactMarkdown>
                </ContentPost>

            </DetailPostContainer>
        )
    }

}