import { Route, Routes } from 'react-router-dom'
import RootLayout from './pages/_RootLayout'
import Homepage from './pages/Homepage'
import ArticleLayout from './pages/_ArticleLayout'
import { Articles } from './pages/Articles'
import { Skills } from './pages/Skills'
import { WorkHistory } from './pages/WorkHistory'
import { AboutMe } from './pages/AboutMe'

export default function RoutesContainer () {
	return (
		<Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Homepage />} />
        <Route path="articles" element={<Articles />} />
        <Route path="skills" element={<Skills />} />
        <Route path="workhistory" element={<WorkHistory />} />
        <Route path="aboutme" element={<AboutMe />} />
      </Route>
      <Route path="/articles/:articleRoute" element={<ArticleLayout />} />

    </Routes>
	)
}