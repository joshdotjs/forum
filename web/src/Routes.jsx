import { Router, Route, Set, PrivateSet } from '@redwoodjs/router'
import ScaffoldLayout from 'src/layouts/ScaffoldLayout'
import ForumLabout from 'src/layouts/ForumLayout/ForumLayout'
import { useAuth } from './auth'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>





      {/* TODO: RBAC / authorization to only allow current user to edit their own posts */}
      <PrivateSet unauthenticated='home' roles="admin">
        <Set wrap={ScaffoldLayout} title="Posts" titleTo="posts" buttonLabel="New Post" buttonTo="newPost">
          <Route path="/admin/posts/new"           page={PostNewPostPage}  name="newPost" />
          <Route path="/admin/posts/{id:Int}/edit" page={PostEditPostPage} name="editPost" />
          <Route path="/admin/posts/{id:Int}"      page={PostPostPage}     name="post" />
          <Route path="/admin/posts"               page={PostPostsPage}    name="posts" />
        </Set>
      </PrivateSet>

      <Set wrap={ForumLabout}>

        {/* main pages */}
        <Route path="/about"            page={AboutPage}   name="about" />
        <Route path="/contact"          page={ContactPage} name="contact" />
        {/* <Route path="/"                 page={ForumPage}   name="home" /> */}
        <Route path="/"                 page={HomePage}   name="home" />
        <Route path="/thread/{id:Int}"  page={ThreadPage}  name="thread" />
        <Route path="/thread/new"       page={ThreadNewThreadPage}  name="newThread" />
        <Route path="/article/{id:Int}" page={ArticlePage} name="article" />

        {/* auth */}
        <Route path="/login"           page={LoginPage}          name="login" />
        <Route path="/signup"          page={SignupPage}         name="signup" />
        <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
        <Route path="/reset-password"  page={ResetPasswordPage}  name="resetPassword" />

        <Route notfound                 page={NotFoundPage} />
      </Set>

      {/*
      <Set wrap={ForumLabout} title="Threads" titleTo="threads" buttonLabel="New Thread" buttonTo="newThread">
        <Route path="/threads/new"           page={ThreadNewThreadPage}  name="newThread" />
        <Route path="/threads/{id:Int}/edit" page={ThreadEditThreadPage} name="editThread" />
        <Route path="/threads/{id:Int}"      page={ThreadThreadPage}     name="thread" />
        <Route path="/threads"               page={ThreadThreadsPage}    name="threads" />
      </Set>
      */}

    </Router>
  )
}

export default Routes
