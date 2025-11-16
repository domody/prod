import { Input } from "@workspace/ui/components/input";
import { Checkbox } from "@workspace/ui/components/checkbox";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select";
import { Switch } from "@workspace/ui/components/switch";
import { Label } from "@workspace/ui/components/label";
import { DashboardCardContentLabel } from "@/app/(app)/team/[teamId]/SummaryContent";
import { Button } from "@workspace/ui/components/button";
import { ArrowUp, Upload } from "lucide-react";

type BaseField = { id: string; label: string; description?: string };

type TextField = BaseField & {
  type: "text" | "email" | "password" | "tel";
  defaultValue: string | null;
};

type CheckboxField = BaseField & {
  type: "checkbox" | "switch";
  defaultValue: boolean;
};

type SelectField = BaseField & {
  type: "select";
  options: readonly string[];
  defaultValue: string;
};

type ImageField = BaseField & {
  type: "image";
  defaultValue: string | null;
};

type Field = TextField | CheckboxField | SelectField | ImageField;

export function FieldRenderer({ field }: { field: Field }) {
  switch (field.type) {
    case "text":
      return <Input defaultValue={field.defaultValue!} className="rounded-sm" />;
    case "email":
      return <Input type="email" defaultValue={field.defaultValue!} className="rounded-sm" />;
    case "tel":
      return <Input type="tel" defaultValue={field.defaultValue!} className="rounded-sm" />;
    case "password":
      return <Input type="password" defaultValue={field.defaultValue!} className="rounded-sm" />;
    case "checkbox":
      return (
        <div className="flex items-start gap-2">
          <Checkbox id={field.id} defaultChecked={field.defaultValue} />
          <div className="grid gap-1">
            <Label htmlFor={field.id}>{field.label}</Label>
            <DashboardCardContentLabel>
              {field.description}
            </DashboardCardContentLabel>
          </div>
        </div>
      );
    case "switch":
      return (
        <div className="flex items-start gap-2">
          <Switch id={field.id} defaultChecked={field.defaultValue} />
          <div className="grid gap-1 mt-0.5">
            <Label htmlFor={field.id}>{field.label}</Label>
            <DashboardCardContentLabel>
              {field.description}
            </DashboardCardContentLabel>
          </div>
        </div>
      );
    case "select":
      return (
        <Select defaultValue={field.defaultValue}>
          <SelectTrigger className="w-[180px] rounded-sm">
            <SelectValue placeholder={field.label} />
          </SelectTrigger>
          <SelectContent className="rounded-sm">
            {field.options.map((option) => (
              <SelectItem key={option} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      );
    case "image":
      return (
        <Button className="w-min rounded-sm" variant={"outline"} size={"sm"}>
          <Upload />
          Upload
        </Button>
      );
    default:
      return null;
  }
}
