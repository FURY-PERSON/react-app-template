import { useTypesSelector } from "@hooks/useTypedSelector";
import { setApp } from "@slices/appSlice";
import { memo, useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import AppRouter from './AppRouter';

//root component
const AppInner = memo(() => {
  const appStore = useTypesSelector((store) => store.app);
  const dispatch = useDispatch();

  console.log('appStore', appStore)

  useEffect(() => {
    dispatch(setApp({a: 'v'}));
  }, [])

  return(
    <AppRouter />
  )
})

export default AppInner;