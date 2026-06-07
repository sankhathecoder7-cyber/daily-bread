import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

// CORE PAGES
import Home from "./pages/Home.jsx";
import Jobs from "./pages/Jobs.jsx";
import JobDetails from "./pages/JobDetails.jsx";
import Contact from "./pages/Contact.jsx";
// SAAS PAGES
import PostJob from "./pages/PostJob.jsx";
import Tenders from "./pages/Tenders.jsx";
import PostTender from "./pages/PostTender.jsx";
import Blog from "./pages/Blog.jsx";
import Other from "./pages/Other.jsx";
import Login from "./pages/Login.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* WRAPPED PAGES (WITH NAVBAR) */}
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />

        <Route
          path="/jobs"
          element={
            <Layout>
              <Jobs />
            </Layout>
          }
        />

        <Route
          path="/job/:id"
          element={
            <Layout>
              <JobDetails />
            </Layout>
          }
        />

        <Route
          path="/post-job"
          element={
            <Layout>
              <PostJob />
            </Layout>
          }
        />

        <Route
          path="/tenders"
          element={
            <Layout>
              <Tenders />
            </Layout>
          }
        />

        <Route
          path="/post-tender"
          element={
            <Layout>
              <PostTender />
            </Layout>
          }
        />

        <Route
          path="/blog"
          element={
            <Layout>
              <Blog />
            </Layout>
          }
        />

        <Route
          path="/other"
          element={
            <Layout>
              <Other />
            </Layout>
          }
        />

        <Route
          path="/login"
          element={
            <Layout>
              <Login />
            </Layout>
          }
        />
<Route
  path="/contact"
  element={
    <Layout>
      <Contact />
    </Layout>
  }
/>
      </Routes>
    </BrowserRouter>
  );
}