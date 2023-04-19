import ReactGA from 'react-ga'

export const initGA = () => {
  ReactGA.initialize('G-D8VNDF0M79')
}

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}
