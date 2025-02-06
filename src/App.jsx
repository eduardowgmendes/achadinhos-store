import './App.css'
import { ConfigProvider, Flex, Layout, Segmented, theme } from 'antd'
import NavHeader from './components/nav/NavHeader'
import { Content } from 'antd/es/layout/layout'
import AppRoutes from './AppRoutes'
import { useEffect, useState } from 'react'
import { AimOutlined, HomeOutlined, InfoCircleOutlined, MoneyCollectOutlined, MoonFilled, ShopOutlined, SunFilled, TagOutlined } from '@ant-design/icons'
import SimpleFooter from './components/SimpleFooter'

function App() {

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('themeMode')
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark')
    }
  }, [])

  const handleThemeChange = (value) => {
    const isDarkMode = value === 'dark'
    setDarkMode(value === 'dark')
    localStorage.setItem('themeMode', isDarkMode ? 'dark' : 'light')
  }

  const links = [
    { icon: <ShopOutlined />, value: 'Departamentos', href: '/' },
    { icon: <TagOutlined />, value: 'Top Ofertas', href: '/' },
    { icon: <AimOutlined />, value: 'Moda & Beleza', href: '/' },
    { icon: <InfoCircleOutlined />, value: 'Sobre', href: '/' }]

  return (

    <ConfigProvider theme={{ algorithm: darkMode ? theme.darkAlgorithm : theme.defaultAlgorithm }}>

      <Segmented vertical style={{ zIndex: 9999, margin: '1rem', position: 'absolute', top: 0, right: 0 }} options={[
        { icon: <SunFilled />, value: 'light' },
        { icon: <MoonFilled />, value: 'dark' },
      ]} onChange={handleThemeChange} value={darkMode ? 'dark' : 'light'} />

      <Layout style={{ padding: 0 }}>

        <NavHeader brandLogo={null} brandName={'AchadinhosStore.com'} links={links} />

        <Content>

          <AppRoutes />

        </Content>

        <SimpleFooter themeMode={darkMode} />

      </Layout>

    </ConfigProvider>

  )
}

export default App
