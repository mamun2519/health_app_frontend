"use client";
import React, { ReactElement, useEffect } from "react";
import {
  useForm,
  FormProvider,
  useFormContext,
  SubmitHandler,
} from "react-hook-form";
type FromConfig = {
  defaultValues?: Record<string, any>;
  resolver?: any;
};
type FormProps = {
  submitHandler: SubmitHandler<any>;
  children: React.ReactNode | ReactElement;
} & FromConfig;
const Form = ({
  children,
  submitHandler,
  defaultValues,
  resolver,
}: FormProps) => {
  const fromConfig: FromConfig = {};
  if (!!defaultValues) fromConfig["defaultValues"] = defaultValues;
  if (!!resolver) fromConfig["resolver"] = resolver;
  const methods = useForm<FormProps>(fromConfig);
  const { reset } = methods;

  const onSubmit = (data: any) => {
    submitHandler(data);
    reset();
  };
  useEffect(() => reset(defaultValues), [defaultValues, reset, methods]);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default Form;
