#!/usr/bin/env python3
"""Module that contains a task_wait_random function."""
import asyncio

wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    """Return an asyncio.Task for wait_random."""
    return asyncio.ensure_future(wait_random(max_delay))
