import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@workspace/ui/components/item";
import { CheckCircle2 } from "lucide-react";

export function SummaryContent() {
  return (
    <div className="w-full h-[calc(100vh-6rem)] overflow-y-scroll no-scrollbar grid grid-cols-4 py-4 gap-4">
      <Item variant="outline" className="h-min">
        <ItemMedia>
          <CheckCircle2 className="size-5" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Basic Item</ItemTitle>
          <ItemDescription>
            A simple item with title and description.
          </ItemDescription>
        </ItemContent>
      </Item>
      <Item variant="outline" className="h-min">
        <ItemMedia>
          <CheckCircle2 className="size-5" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Basic Item</ItemTitle>
          <ItemDescription>
            A simple item with title and description.
          </ItemDescription>
        </ItemContent>
      </Item>
      <Item variant="outline" className="h-min">
        <ItemMedia>
          <CheckCircle2 className="size-5" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Basic Item</ItemTitle>
          <ItemDescription>
            A simple item with title and description.
          </ItemDescription>
        </ItemContent>
      </Item>
      <Item variant="outline" className="h-min">
        <ItemMedia>
          <CheckCircle2 className="size-5" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Basic Item</ItemTitle>
          <ItemDescription>
            A simple item with title and description.
          </ItemDescription>
        </ItemContent>
      </Item>
      <Item variant="outline" className="h-min col-span-2 aspect-video">
        <ItemMedia>
          <CheckCircle2 className="size-5" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Basic Item</ItemTitle>
          <ItemDescription>
            A simple item with title and description.
          </ItemDescription>
        </ItemContent>
      </Item>
      <Item variant="outline" className="h-min col-span-2 aspect-video">
        <ItemMedia>
          <CheckCircle2 className="size-5" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Basic Item</ItemTitle>
          <ItemDescription>
            A simple item with title and description.
          </ItemDescription>
        </ItemContent>
      </Item>

      <Item variant="outline" className="h-min col-span-2 aspect-video">
        <ItemMedia>
          <CheckCircle2 className="size-5" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Basic Item</ItemTitle>
          <ItemDescription>
            A simple item with title and description.
          </ItemDescription>
        </ItemContent>
      </Item>
      <Item variant="outline" className="h-min col-span-2 aspect-video">
        <ItemMedia>
          <CheckCircle2 className="size-5" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Basic Item</ItemTitle>
          <ItemDescription>
            A simple item with title and description.
          </ItemDescription>
        </ItemContent>
      </Item>
    </div>
  );
}
