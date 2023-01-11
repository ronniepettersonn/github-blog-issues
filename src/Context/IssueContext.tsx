import { createContext, ReactNode, useEffect, useState } from "react";

interface Issues {
    id: number
    title: string
    body: string
    html_url: string
    created_at: Date
    user: { login: string }
    comments: number
    number: number
}

interface IssueContext {
    setIssues: (state: Issues[]) => void
    issues: Issues[]
}

export const IssueContext = createContext({} as IssueContext)

interface IssueContextProps {
    children: ReactNode
}

export function IssueContextProvider({ children }: IssueContextProps) {
    const [issues, setIssues] = useState<Issues[]>([])

    return (
        <IssueContext.Provider value={{ setIssues, issues }}>
            {children}
        </IssueContext.Provider>
    )
}