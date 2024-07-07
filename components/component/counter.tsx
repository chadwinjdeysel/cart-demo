
import { Button } from "@/components/ui/button"

interface CounterProps {
    value: number,
    incrementDisabled?: boolean | null,
    decrementDisabled?: boolean | null,
    onIncrement: () => void,
    onDecrement: () => void
}

export function Counter(
    {
        value,
        incrementDisabled,
        decrementDisabled,
        onIncrement,
        onDecrement
    }: CounterProps
) {
    return (
        <div className="flex">
            <Button
                size="icon"
                variant="outline"
                onClick={onDecrement}
                disabled={decrementDisabled ?? false}
            >
                <MinusIcon className="h-4 w-4" />
            </Button>

            <span className="text-base font-medium my-auto mx-4">{value}</span>
            
            <Button 
                size="icon" 
                variant="outline" 
                onClick={onIncrement}
                disabled={incrementDisabled ?? false}
            >
                <PlusIcon className="h-4 w-4" />
            </Button>
        </div>
    )
}


function MinusIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12h14" />
      </svg>
    )
  }
  
  
  function PlusIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12h14" />
        <path d="M12 5v14" />
      </svg>
    )
  }