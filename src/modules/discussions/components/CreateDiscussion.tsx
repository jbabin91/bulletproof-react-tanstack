import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { type z } from 'zod';

import {
  Button,
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Textarea,
} from '@/components/ui';
import { useDisclosure } from '@/hooks/useDisclosure';
import { Authorization, Roles } from '@/modules/auth';

import {
  createDiscussionInputSchema,
  useCreateDiscussion,
} from '../api/create-discussion';

export function CreateDiscussion() {
  const { close, open, isOpen } = useDisclosure();

  const createDiscussion = useCreateDiscussion({
    mutationConfig: {
      onSuccess: () => {
        toast.success('Discussion Created');
      },
    },
  });

  const form = useForm<z.infer<typeof createDiscussionInputSchema>>({
    defaultValues: {
      body: '',
      title: '',
    },
    resolver: zodResolver(createDiscussionInputSchema),
  });

  function onSubmit(values: z.infer<typeof createDiscussionInputSchema>) {
    createDiscussion.mutate({ data: values });
  }

  return (
    <Authorization allowedRoles={[Roles.Admin]}>
      <Dialog
        open={isOpen}
        onOpenChange={(isOpen) => {
          if (isOpen) {
            open();
          } else {
            close();
          }
        }}
      >
        <DialogTrigger asChild>
          <Button variant="outline">Create Discussion</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[500px]">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <DialogHeader>
                <DialogTitle>Create Discussion</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="body"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Body</FormLabel>
                      <FormControl>
                        <Textarea className="resize-none" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <DialogFooter>
                <Button type="submit" onClick={() => close()}>
                  Submit
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </Authorization>
  );
}
