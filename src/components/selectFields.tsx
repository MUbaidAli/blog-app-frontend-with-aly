import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const items = [
      { label: "Select", value: "" },
    { label: "Published", value: "publish" },
  { label: "Draft", value: "draft" },

]

export function SelectFields({handleChange}) {
  return (
    <Select items={items} name="status" onValueChange={(value) => handleChange({target: {name: "status", value: value}})}>
      <SelectTrigger className="w-full max-w-48">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Status</SelectLabel>
          {items.map((item) => (
            <SelectItem key={item.value} value={item.value}  >
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
