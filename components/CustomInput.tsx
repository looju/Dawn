import React from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { CustomInputProps } from "@/types";
const CustomInput = ({
  form,
  label,
  placeholder,
  name,
  type,
  dir,
}: CustomInputProps) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              placeholder={placeholder}
              {...field}
              type={type}
              className="focus:border-blue-600 outline-0 focus:ring-transparent"
            />
          </FormControl>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: dir || "right",
            }}
          >
            <FormMessage
              style={{
                color: "#ff0000",
                fontSize: 12,
              }}
            />
          </div>
        </FormItem>
      )}
    />
  );
};

export default CustomInput;
