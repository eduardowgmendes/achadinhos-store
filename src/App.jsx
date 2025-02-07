import './App.css'
import { ConfigProvider, Flex, Layout, Segmented, theme } from 'antd'
import NavHeader from './components/nav/NavHeader'
import { Content } from 'antd/es/layout/layout'
import AppRoutes from './AppRoutes'
import { useEffect, useState } from 'react'
import { AimOutlined, HomeOutlined, InfoCircleFilled, InfoCircleOutlined, MoneyCollectOutlined, MoonFilled, ShopFilled, ShopOutlined, SkinFilled, SkinOutlined, SunFilled, TagFilled, TagOutlined } from '@ant-design/icons'
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
    { icon: <ShopFilled style={{ color: 'white' }} />, value: 'Departamentos', href: '/' },
    { icon: <TagFilled style={{ color: 'white' }} />, value: 'Top Ofertas', href: '/' },
    { icon: <SkinFilled style={{ color: 'white' }} />, value: 'Moda & Beleza', href: '/' },
    { icon: <InfoCircleFilled style={{ color: 'white' }} />, value: 'Sobre', href: '/' }]

  return (

    <ConfigProvider theme={{ algorithm: darkMode ? theme.darkAlgorithm : theme.defaultAlgorithm }}>

      <Segmented vertical style={{ zIndex: 999999, margin: '1rem', position: 'fixed', top: 256, right: 0 }} options={[
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
