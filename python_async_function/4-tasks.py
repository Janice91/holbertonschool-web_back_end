#!/usr/bin/env python3
"""Module that contains a task_wait_n function."""
import asyncio
from typing import List

task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """Spawn task_wait_random n times and return delays in ascending order.

    Args:
        n: number of tasks to spawn
        max_delay: maximum delay for each task

    Returns:
        list of delays in ascending order
    """
    tasks = [task_wait_random(max_delay) for _ in range(n)]
    delays = []
    for task in asyncio.as_completed(tasks):
        delay = await task
        delays.append(delay)
    return delays
