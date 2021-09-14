import React from 'react';

const Dashboard = React.lazy(() => import('./views/Dashboard'));
//Dashboard routes
//Miscellaneous
const CalculateResult = React.lazy(()=> import('./views/Dashboard/msc/CalculateResult'))
//Class
const ClassIndex = React.lazy(()=> import('./views/Dashboard/Classes/Index'));
const ClassNew = React.lazy(()=> import('./views/Dashboard/Classes/New'));
const ClassEdit = React.lazy(()=> import('./views/Dashboard/Classes/Edit'));
const ClassDelete = React.lazy(()=> import('./views/Dashboard/Classes/Delete'));
//Gazzette
const GazzetteIndex = React.lazy(()=> import('./views/Dashboard/Gazzettes/Index'));
const GazzetteNew = React.lazy(()=> import('./views/Dashboard/Gazzettes/New'));
const GazzetteEdit = React.lazy(()=> import('./views/Dashboard/Gazzettes/Edit'));
const GazzetteDelete = React.lazy(()=> import('./views/Dashboard/Gazzettes/Delete'));
const GazzetteUpload = React.lazy(()=> import('./views/Dashboard/Gazzettes/Upload'));
const GazzetteDownload = React.lazy(()=> import('./views/Dashboard/Gazzettes/Download'));
//Pin
const PinIndex = React.lazy(()=> import('./views/Dashboard/Pins/Index'));
const PinNew = React.lazy(()=> import('./views/Dashboard/Pins/New'));
const PinEdit = React.lazy(()=> import('./views/Dashboard/Pins/Edit'));
const PinDelete = React.lazy(()=> import('./views/Dashboard/Pins/Delete'));
const PinCreate = React.lazy(()=> import('./views/Dashboard/Pins/Create'));
const PinDownload = React.lazy(()=> import('./views/Dashboard/Pins/Download'));
//Result
const ResultIndex = React.lazy(()=> import('./views/Dashboard/Results/Index'));
const ResultNew = React.lazy(()=> import('./views/Dashboard/Results/New'));
const ResultEdit = React.lazy(()=> import('./views/Dashboard/Results/Edit'));
const ResultDelete = React.lazy(()=> import('./views/Dashboard/Results/Delete'));
//Session
const SessionIndex = React.lazy(()=> import('./views/Dashboard/Sessions/Index'));
const SessionNew = React.lazy(()=> import('./views/Dashboard/Sessions/New'));
const SessionEdit = React.lazy(()=> import('./views/Dashboard/Sessions/Edit'));
const SessionDelete = React.lazy(()=> import('./views/Dashboard/Sessions/Delete'));
//Setting
const SettingIndex = React.lazy(()=> import('./views/Dashboard/Settings/Index'));
const SettingNew = React.lazy(()=> import('./views/Dashboard/Settings/New'));
const SettingEdit = React.lazy(()=> import('./views/Dashboard/Settings/Edit'));
const SettingDelete = React.lazy(()=> import('./views/Dashboard/Settings/Delete'));
//StudentPosition
const PositionIndex = React.lazy(()=> import('./views/Dashboard/StudentPositions/Index'));
const PositionNew = React.lazy(()=> import('./views/Dashboard/StudentPositions/New'));
const PositionEdit = React.lazy(()=> import('./views/Dashboard/StudentPositions/Edit'));
const PositionDelete = React.lazy(()=> import('./views/Dashboard/StudentPositions/Delete'));
//Student
const StudentIndex = React.lazy(()=> import('./views/Dashboard/Students/Index'));
const StudentNew = React.lazy(()=> import('./views/Dashboard/Students/New'));
const StudentEdit = React.lazy(()=> import('./views/Dashboard/Students/Edit'));
const StudentDelete = React.lazy(()=> import('./views/Dashboard/Students/Delete'));
const StudentUpload = React.lazy(()=> import('./views/Dashboard/Students/Upload'));
const StudentDownload = React.lazy(()=> import('./views/Dashboard/Students/Download'));
//Subject
const SubjectIndex = React.lazy(()=> import('./views/Dashboard/Subjects/Index'));
const SubjectNew = React.lazy(()=> import('./views/Dashboard/Subjects/New'));
const SubjectEdit = React.lazy(()=> import('./views/Dashboard/Subjects/Edit'));
const SubjectDelete = React.lazy(()=> import('./views/Dashboard/Subjects/Delete'));
//Teacher
const TeacherIndex = React.lazy(()=> import('./views/Dashboard/Teachers/Index'));
const TeacherNew = React.lazy(()=> import('./views/Dashboard/Teachers/New'));
const TeacherEdit = React.lazy(()=> import('./views/Dashboard/Teachers/Edit'));
const TeacherDelete = React.lazy(()=> import('./views/Dashboard/Teachers/Delete'));
const TeacherUpload = React.lazy(()=> import('./views/Dashboard/Teachers/Upload'));
const TeacherDownload = React.lazy(()=> import('./views/Dashboard/Teachers/Download'));
//TeacherSubject
const TeacherSubjectIndex = React.lazy(()=> import('./views/Dashboard/TeacherSubjects/Index'));
const TeacherSubjectNew = React.lazy(()=> import('./views/Dashboard/TeacherSubjects/New'));
const TeacherSubjectEdit = React.lazy(()=> import('./views/Dashboard/TeacherSubjects/Edit'));
const TeacherSubjectDelete = React.lazy(()=> import('./views/Dashboard/TeacherSubjects/Delete'));
const TeacherSubjectDownload = React.lazy(()=> import('./views/Dashboard/TeacherSubjects/Download'));
//Term
const TermIndex = React.lazy(()=> import('./views/Dashboard/Terms/Index'));
const TermNew = React.lazy(()=> import('./views/Dashboard/Terms/New'));
const TermEdit = React.lazy(()=> import('./views/Dashboard/Terms/Edit'));
const TermDelete = React.lazy(()=> import('./views/Dashboard/Terms/Delete'));
//Upload
const UploadIndex = React.lazy(()=> import('./views/Dashboard/Uploads/Index'));
const UploadNew = React.lazy(()=> import('./views/Dashboard/Uploads/New'));
const UploadEdit = React.lazy(()=> import('./views/Dashboard/Uploads/Edit'));
const UploadDelete = React.lazy(()=> import('./views/Dashboard/Uploads/Delete'));
//User
const UserIndex = React.lazy(()=> import('./views/Dashboard/Users/Index'));
const UserNew = React.lazy(()=> import('./views/Dashboard/Users/New'));
const UserEdit = React.lazy(()=> import('./views/Dashboard/Users/Edit'));
const UserDelete = React.lazy(()=> import('./views/Dashboard/Users/Delete'));
const UserDownload = React.lazy(()=> import('./views/Dashboard/Users/Download'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  //miscellaneous
  {path: '/dashboard/settings/calculateresult', name: "Calculate result", component: CalculateResult},

  //classes
  {path: '/dashboard/classes/index', name: "Classes Index", component: ClassIndex},
  {path: '/dashboard/classes/new', name: "Classes New", component: ClassNew},
  {path: '/dashboard/classes/delete/:id', name: "Classes Delete", component: ClassDelete},
  {path: '/dashboard/classes/edit/:id', name: "Classes Edit", component: ClassEdit},
  //gazzettes
  {path: '/dashboard/gazzettes/index', name: "Gazzettes Index", component: GazzetteIndex},
  {path: '/dashboard/gazzettes/new', name: "Gazzettes New", component: GazzetteNew},
  {path: '/dashboard/gazzettes/delete/:id', name: "Gazzettes Delete", component: GazzetteDelete},
  {path: '/dashboard/gazzettes/edit/:id', name: "Gazzettes Edit", component: GazzetteEdit},
  {path: '/dashboard/gazzettes/download', name: "Gazzettes Download", component: GazzetteDownload},
  {path: '/dashboard/gazzettes/upload', name: "Gazzettes Upload", component: GazzetteUpload},
  //pin
  {path: '/dashboard/pins/index', name: "Pin Index", component: PinIndex},
  {path: '/dashboard/pins/new', name: "Pin New", component: PinNew},
  {path: '/dashboard/pins/delete/:id', name: "Pin Delete", component: PinDelete},
  {path: '/dashboard/pins/edit/:id', name: "Pin Edit", component: PinEdit},
  {path: '/dashboard/pins/create', name: "Pin Create", component: PinCreate},
  {path: '/dashboard/pins/download', name: "Pin Download", component: PinDownload},
  //results
  {path: '/dashboard/results/index', name: "Result Index", component: ResultIndex},
  {path: '/dashboard/results/new', name: "Result New", component: ResultNew},
  {path: '/dashboard/results/delete/:id', name: "Result Delete", component: ResultDelete},
  {path: '/dashboard/results/edit/:id', name: "Result Edit", component: ResultEdit},
  //sessions
  {path: '/dashboard/sessions/index', name: "Session Index", component: SessionIndex},
  {path: '/dashboard/sessions/new', name: "Session New", component: SessionNew},
  {path: '/dashboard/sessions/delete/:id', name: "Session Delete", component: SessionDelete},
  {path: '/dashboard/sessions/edit/:id', name: "Session Edit", component: SessionEdit},
  //settings
  {path: '/dashboard/settings/index', name: "Setting Index", component: SettingIndex},
  {path: '/dashboard/settings/new', name: "Setting New", component: SettingNew},
  {path: '/dashboard/settings/delete/:id', name: "Setting Delete", component: SettingDelete},
  {path: '/dashboard/settings/edit/:id', name: "Setting Edit", component: SettingEdit},
  //positions
  {path: '/dashboard/positions/index', name: "Position Index", component: PositionIndex},
  {path: '/dashboard/positions/new', name: "Position New", component: PositionNew},
  {path: '/dashboard/positions/delete/:id', name: "Position Delete", component: PositionDelete},
  {path: '/dashboard/positions/edit/:id', name: "Position Edit", component: PositionEdit},
  //students
  {path: '/dashboard/students/index', name: "Student Index", component: StudentIndex},
  {path: '/dashboard/students/new', name: "Student New", component: StudentNew},
  {path: '/dashboard/students/delete/:id', name: "Student Delete", component: StudentDelete},
  {path: '/dashboard/students/edit/:id', name: "Student Edit", component: StudentEdit},
  {path: '/dashboard/students/upload', name: "Student Upload", component: StudentUpload},
  {path: '/dashboard/students/download', name: "Student Download", component: StudentDownload},
  //subjects
  {path: '/dashboard/subjects/index', name: "Subject Index", component: SubjectIndex},
  {path: '/dashboard/subjects/new', name: "Subject New", component: SubjectNew},
  {path: '/dashboard/subjects/delete/:id', name: "Subject Delete", component: SubjectDelete},
  {path: '/dashboard/subjects/edit/:id', name: "Subject Edit", component: SubjectEdit},
  //teachers
  {path: '/dashboard/teachers/index', name: "Teacher Index", component: TeacherIndex},
  {path: '/dashboard/teachers/new', name: "Teacher New", component: TeacherNew},
  {path: '/dashboard/teachers/delete/:id', name: "Teacher Delete", component: TeacherDelete},
  {path: '/dashboard/teachers/edit/:id', name: "Teacher Edit", component: TeacherEdit},
  {path: '/dashboard/teachers/upload', name: "Teacher Upload", component: TeacherUpload},
  {path: '/dashboard/teachers/download', name: "Teacher Download", component: TeacherDownload},
  //teachersubject
  {path: '/dashboard/teachersubject/index', name: "Subject Allocation Index", component: TeacherSubjectIndex},
  {path: '/dashboard/teachersubject/new', name: "Subject Allocation New", component: TeacherSubjectNew},
  {path: '/dashboard/teachersubject/delete/:id', name: "Subject Allocation Delete", component: TeacherSubjectDelete},
  {path: '/dashboard/teachersubject/edit/:id', name: "Subject Allocation Edit", component: TeacherSubjectEdit},
  {path: '/dashboard/teachersubject/download', name: "Subject Allocation Download", component: TeacherSubjectDownload},
  //terms
  {path: '/dashboard/terms/index', name: "Term Index", component: TermIndex},
  {path: '/dashboard/terms/new', name: "Term New", component: TermNew},
  {path: '/dashboard/terms/delete/:id', name: "Term Delete", component: TermDelete},
  {path: '/dashboard/terms/edit/:id', name: "Term Edit", component: TermEdit},
  //uploads
  {path: '/dashboard/uploads/index', name: "Upload Index", component: UploadIndex},
  {path: '/dashboard/uploads/new', name: "Upload New", component: UploadNew},
  {path: '/dashboard/uploads/delete/:id', name: "Upload Delete", component: UploadDelete},
  {path: '/dashboard/uploads/edit/:id', name: "Upload Edit", component: UploadEdit},
  //users
  {path: '/dashboard/users/index', name: "User Index", component: UserIndex},
  {path: '/dashboard/users/new', name: "User New", component: UserNew},
  {path: '/dashboard/users/delete/:id', name: "User Delete", component: UserDelete},
  {path: '/dashboard/users/edit/:id', name: "User Edit", component: UserEdit},
  {path: '/dashboard/users/download', name: "User Download", component: UserDownload},
  //{ path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard }
];

export default routes;
