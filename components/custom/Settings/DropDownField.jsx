import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


function DropDownField({ label, options, value, onHandleStyleChange }) {
    return (
        <div>
            <label>{label}</label>
            <Select
                defaultValue={value}
                onValueChange={(v) => onHandleStyleChange(v)}
            >
                <SelectTrigger className="w-full">
                    <SelectValue placeholder={value} />
                </SelectTrigger>
                <SelectContent>
                    {options.map((option, index) => (
                        <SelectItem key={index}
                            value={option}>{option}</SelectItem>

                    ))}

                </SelectContent>
            </Select>

        </div>
    )
}

export default DropDownField
