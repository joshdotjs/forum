import { Router, Route, Set, PrivateSet } from '@redwoodjs/router'
import ScaffoldLayout from 'src/layouts/ScaffoldLayout'
import ForumLabout from 'src/layouts/ForumLayout/ForumLayout'
import { useAuth } from './auth'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />

      <Route path="/article/{id:Int}" page={ArticlePage} name="article" />

      <Set wrap={ScaffoldLayout} title="Places" titleTo="places" buttonLabel="New Place" buttonTo="newPlace">
        <Route path="/places/new" page={PlaceNewPlacePage} name="newPlace" />
        <Route path="/places/{id:Int}/edit" page={PlaceEditPlacePage} name="editPlace" />
        <Route path="/places/{id:Int}" page={PlacePlacePage} name="place" />
        <Route path="/places" page={PlacePlacesPage} name="places" />
      </Set>

      <PrivateSet unauthenticated='home' roles="admin">
        <Set wrap={ScaffoldLayout} title="Posts" titleTo="posts" buttonLabel="New Post" buttonTo="newPost">
          <Route path="/admin/posts/new" page={PostNewPostPage} name="newPost" />
          <Route path="/admin/posts/{id:Int}/edit" page={PostEditPostPage} name="editPost" />
          <Route path="/admin/posts/{id:Int}" page={PostPostPage} name="post" />
          <Route path="/admin/posts" page={PostPostsPage} name="posts" />
        </Set>
      </PrivateSet>

      <Set wrap={ForumLabout}>
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/contact" page={ContactPage} name="contact" />
        <Route path="/" page={HomePage} name="home" />
        <Route notfound page={NotFoundPage} />
      </Set>
    </Router>
  )
}

export default Routes
