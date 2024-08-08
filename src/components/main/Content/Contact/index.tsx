import { Button } from "@/components/ui/button";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";

const formSchema = z.object({
    user_name: z.string(),
    user_email: z.string().email(),
    message: z.string().max(1000).min(5),
});

function Contact() {
    const formRef = useRef(null);
    const [disableEmail, setDisableEmail] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            message: "",
        },
    });

    const handleSubmit = () => {
        return emailjs
            .sendForm(
                "service_wprwqmp",
                "template_jmluisp",
                formRef.current || "",
                {
                    publicKey: "OLH77Cps8Cc2kmp8H",
                }
            )
            .then(
                () => {
                    setDisableEmail(true);
                    toast("Email sent!");
                },
                (error) => {
                    toast("Couldn't send email");
                    console.log("Email error on send...", error);
                }
            );
    };

    return (
        <div className="flex flex-col gap-5 bg-white rounded-md w-1/2 h-[75%] self-center p-4">
            <h1 className="font-homeVideo text-black">Contact Me!</h1>
            <p className="font-homeVideo text-black">
                Need a Front End Developer?,contact me through{" "}
                <a
                    href="www.linkedin.com/in/agusguevara"
                    target="_blank"
                    className="text-blue-500 underline"
                >
                    LinkedIn
                </a>
                , or send me an email directly below!
            </p>
            <Form {...form}>
                <form
                    ref={formRef}
                    className="flex flex-col gap-4 h-full"
                    onSubmit={form.handleSubmit(handleSubmit)}
                >
                    <input
                        type="hidden"
                        name="access_key"
                        value="37c6e0f3-710f-42a9-b329-7084bd0f1695"
                    />
                    <FormField
                        control={form.control}
                        name="user_name"
                        render={({ field }) => {
                            return (
                                <FormItem className="h-1/3">
                                    <FormLabel className="font-homeVideo">
                                        Full Name
                                    </FormLabel>
                                    <FormMessage />
                                    <Input
                                        placeholder="Full Name"
                                        className="w-full p-2 border border-gray-400 rounded-md"
                                        type="text"
                                        {...field}
                                    />
                                </FormItem>
                            );
                        }}
                    />
                    <FormField
                        name="user_email"
                        control={form.control}
                        render={({ field }) => {
                            return (
                                <FormItem className="h-1/3 ">
                                    <FormLabel className="font-homeVideo">
                                        Email address
                                    </FormLabel>
                                    <FormMessage />
                                    <Input
                                        placeholder="Email address"
                                        type="email"
                                        className="w-full p-2 border border-gray-400 rounded-md"
                                        {...field}
                                    />
                                </FormItem>
                            );
                        }}
                    />
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => {
                            return (
                                <FormItem className="h-full">
                                    <FormLabel className="font-homeVideo">
                                        Your email
                                    </FormLabel>
                                    <FormMessage />
                                    <Textarea
                                        placeholder="Your message..."
                                        className="w-full h-[90%] p-2 resize-none border border-gray-400 rounded-md"
                                        {...field}
                                    />
                                </FormItem>
                            );
                        }}
                    />
                    <Button
                        type="submit"
                        className="font-homeVideo"
                        disabled={disableEmail}
                    >
                        Send!
                    </Button>
                </form>
            </Form>
            <Toaster />
        </div>
    );
}

export default Contact;
