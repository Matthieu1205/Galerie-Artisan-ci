import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppFloat from './components/WhatsAppFloat.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Accueil from './pages/Accueil.jsx'
import Immobilier from './pages/Immobilier.jsx'
import Renovation from './pages/Renovation.jsx'
import Demenagement from './pages/Demenagement.jsx'
import GardeMeuble from './pages/GardeMeuble.jsx'
import Ameublement from './pages/Ameublement.jsx'
import PacksPromoteurs from './pages/PacksPromoteurs.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'

import { AuthProvider } from './admin/AuthContext.jsx'
import ProtectedRoute from './admin/ProtectedRoute.jsx'
import AdminLayout from './admin/AdminLayout.jsx'
import Login from './admin/pages/Login.jsx'
import Dashboard from './admin/pages/Dashboard.jsx'
import AdminBiens from './admin/pages/AdminBiens.jsx'
import AdminProduits from './admin/pages/AdminProduits.jsx'
import AdminCommandes from './admin/pages/AdminCommandes.jsx'
import AdminDevis from './admin/pages/AdminDevis.jsx'
import AdminReservations from './admin/pages/AdminReservations.jsx'
import AdminClients from './admin/pages/AdminClients.jsx'
import AdminUtilisateurs from './admin/pages/AdminUtilisateurs.jsx'
import AdminParametres from './admin/pages/AdminParametres.jsx'

function PublicLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}

export default function App() {
  const location = useLocation()
  const isAdmin = location.pathname.startsWith('/admin')

  return (
    <AuthProvider>
      <ScrollToTop />
      <Routes>
        {/* Routes publiques */}
        <Route path="/" element={<PublicLayout><Accueil /></PublicLayout>} />
        <Route path="/immobilier" element={<PublicLayout><Immobilier /></PublicLayout>} />
        <Route path="/renovation" element={<PublicLayout><Renovation /></PublicLayout>} />
        <Route path="/demenagement" element={<PublicLayout><Demenagement /></PublicLayout>} />
        <Route path="/garde-meuble" element={<PublicLayout><GardeMeuble /></PublicLayout>} />
        <Route path="/ameublement" element={<PublicLayout><Ameublement /></PublicLayout>} />
        <Route path="/packs-promoteurs" element={<PublicLayout><PacksPromoteurs /></PublicLayout>} />
        <Route path="/contact" element={<PublicLayout><Contact /></PublicLayout>} />

        {/* Routes admin */}
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin" element={<ProtectedRoute><AdminLayout /></ProtectedRoute>}>
          <Route index element={<Dashboard />} />
          <Route path="biens" element={<AdminBiens />} />
          <Route path="produits" element={<AdminProduits />} />
          <Route path="commandes" element={<AdminCommandes />} />
          <Route path="devis" element={<AdminDevis />} />
          <Route path="reservations" element={<AdminReservations />} />
          <Route path="clients" element={<AdminClients />} />
          <Route path="utilisateurs" element={<AdminUtilisateurs />} />
          <Route path="parametres" element={<AdminParametres />} />
        </Route>

        {/* 404 */}
        <Route path="*" element={isAdmin ? <NotFound /> : <PublicLayout><NotFound /></PublicLayout>} />
      </Routes>
    </AuthProvider>
  )
}
