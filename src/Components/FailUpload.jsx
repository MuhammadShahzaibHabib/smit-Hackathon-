import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export default function FileUpload({ form, name, label }) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              type="file"
              {...field}
              value={field.value?.fileName}
              onChange={(e) => field.onChange(e.target.files[0])}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
