import React from 'react';
import { 
  Logo, 
  Navbar, 
  LeftSideNavbar, 
  RightSideChatBar,
  CreateProjectForm, 
  Footer, 
  ProjectStats, 
  NewClients,
  MonthlyTarget,
  Card,
  AddTask,
  TasksProgress,
  MoreTasksBtn,
  UpcomingProjects,
  RecentMessages
} from '../components';
import SVG from '../assets/SVG/SVG';

//will change later
import '../assets/vendor/jqvmap/css/jqvmap.min.css';
import '../assets/vendor/chartist/css/chartist.min.css';
import '../assets/vendor/jqvmap/css/jqvmap.min.css';
import '../assets/vendor/bootstrap-select/dist/css/bootstrap-select.min.css';
import '../assets/css/style.css';

const Home = () => {
  return (
    <>
    <Logo />
    <RightSideChatBar />
    <Navbar />
    <LeftSideNavbar />
    
    <div className="content-body">
    <div className="container-fluid">
    <CreateProjectForm />
    <div className="row">
    <div className="col-xl-6">
    <div className="row">
    <Card
    title="Total Project Handled" 
    number = {78}
    svg = {SVG.Star}
    />

    <Card
    title="Contacts You Have" 
    number = {214}
    svg = {SVG.Profile}
    />

    <Card
    title="Total Unfinished Task" 
    number = {93}
    svg = {SVG.Blocks}
    />

    <Card
    title="Unread Messages" 
    number = {12}
    svg = {SVG.Message}
    />
    <ProjectStats />
    <MonthlyTarget />
    <NewClients />
    </div>
    </div>
    <div className="col-xl-6">
    <div className="row">
    <div className="col-xl-6 col-xxl-12 col-md-6">
    <div className="card">
    <AddTask />
    <TasksProgress />
    <MoreTasksBtn />
    </div>
    </div>
    <UpcomingProjects />
    <RecentMessages />
    </div>
    </div>
    </div>
    </div>
    </div>
    <Footer />
    </>
  )
}

export default Home;