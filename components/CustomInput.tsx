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
const CustomInput = ({form, label, placeholder,name}:) => {
  return (
    <FormField
      control={form.control}
      name="Email"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Email</FormLabel>
          <FormControl>
            <Input placeholder="Enter your Email address" {...field} />
          </FormControl>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "right",
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
