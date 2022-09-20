import { Switch, Route } from 'react-router-dom'
import Home from 'pages/HomePage/Home'
import Login from 'pages/Login/Login'
import NoMatchRoute from 'pages/NoMatchRoutePage/NoMatchRoute'
import Years from 'pages/YearsPage/Years'
import Temporalities from 'pages/TemporalitiesPage/Temporalities'
import Types from 'pages/TypesPage/Types'
import Pillars from 'pages/PillarsPage/Pillars'
import Indicators from 'pages/IndicatorsPage/Indicators'
import PrivateRoute from 'components/PrivateRoute'
import Planning from 'pages/PlanningPage/Planning'
import PersonalGoals from 'pages/PersonalGoals/PersonalGoalsContainer'
import Diagnostico from 'pages/DiagnosticsPage/Diagnostico'
import FodaActual from 'components/FodaActual'
import VerFodaAnterior from 'components/VerFodaAnterior'
import DataStudio from 'components/DataStudio'

export default function Routing () {
  return (
    <Switch>
      <Route
        exact
        path='/'
        component={Login}
      />
      <PrivateRoute exact path='/home'>
        <Home />
      </PrivateRoute>
      <PrivateRoute exact path='/years'>
        <Years />
      </PrivateRoute>
      <PrivateRoute exact path='/temporalities'>
        <Temporalities />
      </PrivateRoute>
      <PrivateRoute exact path='/types'>
        <Types />
      </PrivateRoute>
      <PrivateRoute exact path='/pillars'>
        <Pillars />
      </PrivateRoute>
      <PrivateRoute exact path='/indicators'>
        <Indicators />
      </PrivateRoute>
      {/* <PrivateRoute exact path='/spotlights'>
        <Spotlights />
      </PrivateRoute> */}
      <PrivateRoute exact path='/planning'>
        <Planning />
      </PrivateRoute>
      <PrivateRoute exact path='/personal-goals'>
        <PersonalGoals />
      </PrivateRoute>
      <PrivateRoute exact path='/diagnostico'>
        <Diagnostico />
      </PrivateRoute>
      <PrivateRoute exact path='/diagnostico/fodaActual'>
        <FodaActual />
      </PrivateRoute>
      <PrivateRoute exact path='/diagnostico/verFodaAnterior'>
        <VerFodaAnterior />
      </PrivateRoute>
      <PrivateRoute exact path='/diagnostico/dataStudio'>
        <DataStudio />
      </PrivateRoute>
      <Route path='*'>
        <NoMatchRoute />
      </Route>
    </Switch>
  )
}
